from flask import request
from http import HTTPStatus


def csrf_protection(fn):
    """Require that the X-Requested-With header is present."""

    def protected(*args):
        if "X-Requested-With" in request.headers:
            return fn(*args)
        else:
            return "X-Requested-With header missing", HTTPStatus.FORBIDDEN

    return protected