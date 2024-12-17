# Tryperdiem test App

Welcome to the Tryperdiem test App! This README will guide you through the steps to install, configure, and run the application on your local environment.

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js**  
   - Recommended version: `16.x` or higher.  
   - [Download Node.js](https://nodejs.org).

2. **npm** or **yarn**  
   - npm comes with Node.js by default. For yarn, install it globally:
     ```bash
     npm install -g yarn
     ```

3. **React Native CLI**  
   - Install globally:
     ```bash
     npm install -g react-native-cli
     ```

## Setup Instructions

Follow these steps to set up and run the application.

### 1. Clone the Repository
   Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```

### 2. Install Dependencies
   Install the required dependencies using npm or yarn:
   ```bash
   yarn
   ```

### 3. Install Dependencies
   Install the required dependencies using npm or yarn:
   ```bash
   cd ios
   pod install
   cd ..
   ```

### 4. Run the Application
   - For IOS:
     ```bash
     npx react-native run-ios
     ```  
   - For Android:
     ```bash
     npx react-native run-android
     ``` 