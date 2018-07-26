
<img src="docs/logo.png" />

# Movies & Directors - React Native App - ADDC Workshop 2018

This is the companion repository for the Workshop "Introduction to React Native and GraphQL for App Development" at ADDC 2018 in Barcelona.

## The Workshop 😎
The objective of the workshop is to provide base understanding of:

 - ✅ _React Native_ framework and
 - ✅ _React_ designs principles by by building a 
 - ✅ _Native App_ for iOS and Android 
platform.   

Additionally, 
 - ✅ _GraphQL_ query language 
 
 will be presented and used during the workshop as a strategic companion for frontend development and perfect match for React design.    
 
By the end of the workshop you will be capable of understanding the technologies involved and proactively progress in your learning journey.

There are 2 repositories for this workshop.  
- 👉 This repository contains all the React Native codebase.
- 👉 The [other](https://github.com/nzaghini/graphql-server-addc-2018) contains the GraphQL server codebase.

## Prepare for the Workshop 🤓

For a smoother and faster start of the workshop, please make sure you have your env setup and a running React Native App by following the sections below.

### Environment Setup 💻
Setup your machine by following the instructions available at official React Native getting started [link](https://facebook.github.io/react-native/docs/getting-started.html).
Click on `Building Projects with Native Code` tab, select your Operating System and desired target platform(s), then follow the setup instructions.

VSCode is the IDE that will be used during the course. Unless you have strong preferences on other IDEs it is suggested to have it installed before the start of the Workshop. You can download and install VSCode from [here](https://code.visualstudio.com/).

### Create the App 📱
Create an application with the command `react-native init MyMovies` and run it via `react-native run-ios` and/or `react-native run-android` as per the getting started guide. In case of issues consult the troubleshoot section of the guide or refer to StackOverflow with the encountered issue.

Please note that __Java 8__ is the actual supported Java version for Android. If you have already upgraded to Java 9 you can either downgrade or keep both, but carefully setup the env to only use Java 8 for Android builds.

Finally the GraphQL server companion project can be found at this [link](https://github.com/nzaghini/graphql-server-addc-2018).

#### Notes 📝

You may get confused between `react-native init <NameOfYourProject>` and `create-react-native init  <NameOfYourProject>`. The first is the usual way you create a react native project with native dependencies and that's the approach used during the Workshop. The latter is a simplified setup which allows running iOS and Android react native without the need of Xcode or Android Studio to actually compile your app. Both are valid approaches and please note from the latter you can `eject` to the former.   
Still, the Workshop will just cover the `react-native init <NameOfYourProject>` setup.


## How to use this repository 🧐
This repository builds up several stages of the Workshop, including:
- 💪 ESLint setup
- 🤙 Functional and Stateful components 
- 🤞 Chrome debugging
- 👊 Testing with Jest 
- 🤟 GraphQL querying via Apollo Client
- 👍 and more ...

You can check out the different commits to see the different stages of the project. This is a valid approach also during the Workshop in case you fall behind and want to quickly catch up.

Tags you may want to look at:

- 0.1.0: Scaffolding project setup
- 0.2.0: Static Movie List on the screen
- 0.3.0: Added support for Directors of Movies
- 0.4.0: Apollo integration for GraphQL network query
- 0.5.0: Added Jest tests 
- 0.6.0: Improved tests with Apollo MockProvider
- 0.7.0: Covered extra test cases 

## Repository Evolution 🤤
This repository won't stale at the Workshop date. It will continue growing with extra features over time as a best practice example project of React Native with GraphQL. Future development will include:
- Improved testing 
- GraphQL mutations
- Navigation to Movie details page
    - Navigation and user interaction
- Performance improvements with RN FlatList component
- StyledComponent styles
- CI/CD 
- ... 
