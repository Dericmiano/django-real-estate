from .base import *  # noqa: F403

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = env("EMAIL_HOST")  # noqa
EMAIL_USE_TLS = True  # noqa
EMAIL_PORT = env("EMAIL_PORT")  # noqa
EMAIL_HOST_USER = env("EMAIL_HOST_USER")  # noqa
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")  # noqa
DEFAULT_FROM_EMAIL = "mianoderic@gmail.com"
DOMAIN = env("DOMAIN")  # noqa
SITE_NAME = "Real Estate"

DATABASES = {
    "default": {
        "ENGINE": env("POSTGRES_ENGINE"),  # noqa
        "NAME": env("POSTGRES_DB"),  # noqa
        "USER": env("POSTGRES_USER"),  # noqa
        "PASSWORD": env("POSTGRES_PASSWORD"),  # noqa
        "HOST": env("PG_HOST"),  # noqa
        "PORT": env("PG_PORT"),  # noqa
    }
}
