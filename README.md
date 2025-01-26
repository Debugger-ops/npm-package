# Attractive React Button Component

## Overview
A customizable and stylish React button component with multiple variants and sizes.

## Features
- Three color variants: primary, secondary, danger
- Three size options: small, medium, large
- Hover effects
- Flexible styling
- TypeScript prop validation

## Installation
```bash
npm install prop-types
```

## Usage
```jsx
import Button from './Button';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    
      
        Default Button
      
      
      
        Large Secondary Button
      
      
      
        Small Danger Button
      
    
  );
}
```

## Props
|
 Prop      
|
 Type     
|
 Default    
|
 Description                     
|
|
-----------
|
----------
|
------------
|
--------------------------------
|
|
 children  
|
 node     
|
 Required   
|
 Button content                 
|
|
 onClick   
|
 function 
|
 Required   
|
 Click event handler            
|
|
 variant   
|
 string   
|
 'primary'  
|
 Button color variant           
|
|
 size      
|
 string   
|
 'medium'   
|
 Button size                    
|
|
 className 
|
 string   
|
 ''         
|
 Additional CSS classes         
|

## Variants
- `primary`: Blue theme
- `secondary`: Green theme
- `danger`: Red theme

## Sizes
- `small`: Compact button
- `medium`: Standard button
- `large`: Prominent button
