# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


v0.5.0
------------------------------
*September 21, 2017*

### Changed
- Toggle will initiate on page load.
- Updated Javascript documentation comments.


v0.4.0
------------------------------
*September 20, 2017*

### Changed
- Moved build packages in `devDependencies`.


v0.3.0
------------------------------
*September 20, 2017*

### Added
- Added ability to specify a `data-toggle-class` attribute in order to toggle a custom class.


v0.2.0
------------------------------
*September 18, 2017*

### Added
- Added `js-test-buddy` package.

### Changed
- Using test helper functions from `js-test-buddy` in unit tests.

### Removed
- Removed dom and test util scripts.


v0.1.0
------------------------------
*September 05, 2017*

### Added
- Added toggle function.
- Added toggle function unit tests.
- Added `compile` task.

### Changed
- Main function set to transpiled file.
- `prestart` task now runs `lint`, `test`, and `compile` scripts.


v0.0.1
------------------------------
*September 04, 2017*

### Added
- Added initial project files.
