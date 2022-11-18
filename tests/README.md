## Tests

This is the subdirectory where all tests lie. Tests are written using [Flask-Testing](https://pythonhosted.org/Flask-Testing/) and run by Python's built-in [unittest](https://docs.python.org/3/library/unittest.html).

### Running individual tests

You can run individual testcases by running:
```sh
python -m unittest <TEST_NAME>
```

### Running all tests

You can run all testcases by running:
```sh
python -m unittest discover tests
```