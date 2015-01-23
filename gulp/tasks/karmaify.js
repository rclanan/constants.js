'use strict';

var gulp, testRunnerFactory, unitTestModifier, integrationTestModifier, debugModifier, allBrowsersModifier;

integrationTestModifier = require('../../karma/karmaIntegrationTestConfigurationModifier');
unitTestModifier = require('../../karma/karmaUnitTestsConfigurationModifier');
debugModifier = require('../../karma/karmaDebugConfigurationModifier');
allBrowsersModifier = require('../../karma/karmaAllBrowsersConfigurationModifier');

gulp = require('gulp');
testRunnerFactory  = require('./karma/testRunnerFactory');

gulp.task('karma', testRunnerFactory.buildTestRunner([unitTestModifier]));
gulp.task('karma:watch', testRunnerFactory.buildTestRunner([unitTestModifier]));

gulp.task('karma:all', testRunnerFactory.buildTestRunner([]));
gulp.task('karma:all:debug', testRunnerFactory.buildTestRunner([debugModifier]));
gulp.task('karma:all:allBrowsers', testRunnerFactory.buildTestRunner([allBrowsersModifier]));

gulp.task('karma:unitTests', testRunnerFactory.buildTestRunner([unitTestModifier]));
gulp.task('karma:unitTests:debug', testRunnerFactory.buildTestRunner([unitTestModifier, debugModifier]));
gulp.task('karma:unitTests:allBrowsers', testRunnerFactory.buildTestRunner([unitTestModifier, allBrowsersModifier]));

gulp.task('karma:integrationTests', testRunnerFactory.buildTestRunner([integrationTestModifier]));
gulp.task('karma:integrationTests:debug', testRunnerFactory.buildTestRunner([integrationTestModifier, debugModifier]));
gulp.task('karma:integrationTests:allBrowsers', testRunnerFactory.buildTestRunner([integrationTestModifier, allBrowsersModifier]));
