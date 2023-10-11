console.log(data);

// WRITE YOUR CODE BELOW!
const findDogObj = (name) => {
  return data.find(val => val.name === name)
}

const clearMain = () => {
  const content = document.querySelectorAll("main > *")
  content.forEach((val) => val.remove())
}

const renderDogCard = (dog) => {
  
}