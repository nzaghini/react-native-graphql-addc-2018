## Detox Testing
- Added support for Detox end to end testing 
- Improved Jest test reliability

## i18n support
- Support for internationalisation 
- Added Podfile for iOS project

## Add react-navigation and movie details screen
- Added tests and tweaked Jest to play nicely with react-navigation
- Allowed movie on MovieDetails via both props and navigation 
- Updated GraphQL endpoint as result of new server deploy
- Updated GraphQL model as result of new schema deploy
- Updated folder structure

## GraphQL types automatic generation
- Please install apollo `npm install -g apollo`
- Run `yarn generate:graphql` and the models will be available at src/queries/models

## Typescript
- Added typescript support and linter configuration
- Still missing graphql types

## React Native 0.56.0 support
- Upgraded to RN 0.56.0