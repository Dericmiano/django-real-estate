import pytest


def test_user_str(base_user):
    """Test the custom user model string representation."""
    assert base_user.__str__() == f"{base_user.username}"


def test_user_short_name(base_user):
    """Test that the user models get_short_name works."""
    short_name = f"{base_user.username}"
    assert base_user.get_short_name() == short_name


def test_user_full_name(base_user):
    """Test get_user_full name works"""
    full_name = f"{base_user.first_name} {base_user.last_name}"
    assert base_user.get_full_name == full_name


def test_base_user_email_is_normalized(base_user):
    """Test that a new user email is normalized."""
    email = "DERI@gmail.com"
    assert base_user.email == email.lower()


def test_super_user_email_is_normalized(super_user):
    email = "DERI@gmail.com"
    assert super_user.email == email.lower()


def test_super_user_is_no_staff(user_factory):
    """Test that an error is raised when an admin user has is_staff set false."""
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=True, is_staff=False)
    assert str(err.value) == "Superussers must have is_staff=True"


def test_super_user_is_not_superuser(user_factory):
    """Test that an error is raised when is_admin is False."""
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=False, is_staff=True)
    assert str(err.value) == "Superussers must have is_superuser=True"


def test_create_user_with_no_email(user_factory):
    """Test creating a user without an email raise an error."""
    with pytest.raises(ValueError) as err:
        user_factory.create(email=None)
    assert str(err.value) == "Base User account: An email address is required"


def test_create_user_with_no_user_name(user_factory):
    """Test creating a user with no username raises an error."""
    with pytest.raises(ValueError) as err:
        user_factory.create(username=None)
    assert str(err.value) == "Users must submit a username"


def test_create_user_with_no_first_name(user_factory):
    """Test creating a user with no username raises an error."""
    with pytest.raises(ValueError) as err:
        user_factory.create(first_name=None)
    assert str(err.value) == "users must provide a firstname"


def test_create_user_with_no_last_name(user_factory):
    """Test creating a user with no lastname raises an error."""
    with pytest.raises(ValueError) as err:
        user_factory.create(last_name=None)
    assert str(err.value) == "Users must provide a las name"


def test_create_super_user_with_no_email(user_factory):
    """Test creating a user without an email raise an error."""
    with pytest.raises(ValueError) as err:
        user_factory.create(email=None, is_superuser=True, is_staff=True)
    assert str(err.value) == "Admin account: An email is required"


def test_create_super_user_with_no_password(user_factory):
    """Test creating a user without an password raise an error."""
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=True, is_staff=True, password=None)
    assert str(err.value) == "Superuser must have a password"


def test_user_email_incorrect(user_factory):
    """Test an erro is raised when anon valid email is provided."""
    with pytest.raises(ValueError) as err:
        user_factory.create(email="None.com")
    assert str(err.value) == "You must provide a valid email address"
