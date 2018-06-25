# Introduction to React Native and GraphQL - ADDC 2018

This is the companion repository for the Workshop "Introduction to React Native and GraphQL for App Development" at ADDC 2018 in Barcelona.

## The Workshop
The objective of the workshop is to provide base understanding of the _React Native_ framework and the _React_ designs principles by building a Native App for iOS and Android platform.   
Additionally, the _GraphQL_ query language will be presented and used during the workshop as a strategic companion for frontend development and perfect match for React design.    
By the end of the workshop you will be capable of understanding the technologies involved and proactively progress in your learning journey.


## Environment Setup
Setup your machine by following the instructions available at official React Native getting started link [link].
Select your Operating System and desired target platform(s), then follow the setup instructions.

Make sure you created an application with the command `react-native init MyMovies` and run it via `react-native run-ios` and/or `react-native run-android` successfully as per the getting started guide. In case of issues consult the troubleshoot section of the guide or refer to StackOverflow with the encountered issue.

Please note that Java 8 is the actual supported version for Android. If you already upgraded to Java 9 you can either downgrade or keep them both but carefully setup the env to only use Java 8 for Android builds.

__Note__: you may get confused between `react-native init <NameOfYourProject>` and `create-react-native init  <NameOfYourProject>`. The first is the usual way you create a react native project with native dependencies and that's the approach used during the Workshop. The latter is a simplified setup which allows running iOS and Android react native without the need of Xcode or Android Studio to actually compile your app. Both are valid approaches and please note from the latter you can `eject` to the former.   
Still, the Workshop will just cover the `react-native init <NameOfYourProject>` setup.


## How to use this repository 
This repository builds up several stages of the Workshop, including ESLint setup, creation of functional and stateful components, component nesting, testing with Jest, and GraphQL querying via Apollo Client. You can check out the different commits to see the different stages of the project. This is a valid approach also during the Workshop in case you fall behind and want to quickly catch up. 

## Repository Evolution
This repository won't stale at the Workshop date. It will continue growing with extra features over time as a best practice example project of React Native with GraphQL. Future development will include:
- Improved testing 
- GraphQL mutations
- Navigation to Movie details page
    - Navigation and user interaction
- Performance improvements with RN FlatList component
- StyledComponent styles
- CI/CD 
- ... 
