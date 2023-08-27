from .base import *  # noqa: F403

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
