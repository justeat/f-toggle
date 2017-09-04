# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


v1.0.0
------------------------------
*August 21, 2018*

## Changed
- Bumped to version 1.0.0 for release version.


v0.13.1
------------------------------
*April 26, 2018*

### Added
- Added package size badge to readme.


v0.13.0
------------------------------
*April 19, 2018*

### Added
- A user can now pass an element through to the setToggleCallback function


v0.12.1
------------------------------
*March 21, 2018*

### Added
- Added possibility to configure whether first accordion section is expanded by default (`data-toggle-first-section-expanded` attribute)


v0.12.0
------------------------------
*March 13, 2018*

### Added
- Improved accessibility by allowing a user to move between accordion sections using 'tab', and toggling sections on 'enter'


v0.11.2
------------------------------
*February 20, 2018*

### Changed
- Compiled dist folder for publication, with helper files


v0.11.1
------------------------------
*February 19, 2018*

### Changed
- Compiled dist folder for publication


v0.11.0
------------------------------
*February 16, 2018*

### Added
- toggleSection / toggleAccordion / setToggleCallback methods

### Changed
- Structure of module to expose helper methods in helpers/external.js, and moved internal helpers to helpers/internal.js


v0.10.0
------------------------------
*January 29, 2018*

### Changed
- Updated `browserlist` in `package.json`
- Updated to use `babel-preset-env`
- Updated package versions (minor updates)


v0.9.0
------------------------------
*January 19, 2018*

### Added
- Logic to allow user to hide all other elements clicked in the same toggle group.


v0.8.0
------------------------------
*January 18, 2018*

### Changed
- Updated `gulp-build-fozzie` version.
- Updated failing snapshot unit test files.


v0.7.0
------------------------------
*January 16, 2018*

### Added
- `dangerfile.js` added to check PRs via Travis

### Changed
- Updated `gulp-build-fozzie` version


v0.6.0
------------------------------
*December 20, 2017*

### Added
- Added lint paths to build config.
- Using `concurrently` to run npm scripts concurrently...!

### Changed
- Updated package versions.
- Updated unit test helper function names.
- Updated Travis config.
- Tidied up npm scripts config.
- Fixed ESlint issues.


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
