





export function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}

//For the HomeWork
// export function getImageUrl(imageId, size = 's') {
//     return (
//       'https://i.imgur.com/' +
//       imageId +
//       size +
//       '.jpg'
//     );
//   }
