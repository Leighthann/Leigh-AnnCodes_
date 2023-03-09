
//import './App.css'

//className, src, alt, width, and height are some of the props you can pass to an <img>
// function Avatar({ person, size }) {
//   return (
//     <img
//       className='avatar'
//       src={getImageUrl(person)}
//       // src="https://i.imgur.com/1bX5QH6.jpg"
//       alt={person.name}//alt="Lin Lanying"
//       width={size}//width={100}
//       height={size}//height={100}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Avatar
//         size={100}
//         person={{
//           name: 'Lin Lanying',
//           imageId: '1bX5QH6'
//         }}
//       />
//       <Avatar
//         size={80}
//         person={{
//           name: 'Aklilu Lemma',
//           imageId: 'OKS67lh'
//         }}
//       />
//       <Avatar
//         size={50}
//         person={{
//           name: 'Lin Lanying',
//           imageId: '1bX5QH6'
//         }}
//       />
//     </div>
//   );
// }
//Passing props to the child component
// Parent - Profile  Child - Avatar

import Avatar from './Avatar.jsx';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

/*
function Congratulation() {
  return (
    <h1> Good job ! </h1>
  );
}
*/


export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </Card>
  );
}

//Begineer
// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }


//Extract Component - Homeork
// This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. 
// Youâ€™ll need to choose what props to pass to it.


//Question A
// import { getImageUrl } from './utils.js';

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <section className="profile">
//         <h2>Maria SkÅ‚odowska-Curie</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('szV5sdG')}
//           alt="Maria SkÅ‚odowska-Curie"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             physicist and chemist
//           </li>
//           <li>
//             <b>Awards: 4 </b> 
//             (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             polonium (element)
//           </li>
//         </ul>
//       </section>
//       <section className="profile">
//         <h2>Katsuko Saruhashi</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('YfeOqp2')}
//           alt="Katsuko Saruhashi"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             geochemist
//           </li>
//           <li>
//             <b>Awards: 2 </b> 
//             (Miyake Prize for geochemistry, Tanaka Prize)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             a method for measuring carbon dioxide in seawater
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }

//Solution for Question A
/*
import { getImageUrl } from './utils.js';

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li><b>Profession:</b> {profession}</li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria SkÅ‚odowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>
  );
}

//Question B
//Adjust the image size based on a prop

import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}

//Solution for Question B
In this example, Avatar receives a numeric size prop which determines the <img> width and height. The size prop is set to 40 in this example. 
However, if you open the image in a new tab, youâ€™ll notice that the image itself is larger (160 pixels). 
The real image size is determined by which thumbnail size youâ€™re requesting.

Change the Avatar component to request the closest image size based on the size prop. 
Specifically, if the size is less than 90, pass 's' (â€œsmallâ€) rather than 'b' (â€œbigâ€) to the getImageUrl function. Verify that your changes work by rendering avatars with different values of the size prop and opening images in a new tab.

import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  let thumbnailSize = 's';
  if (size > 90) {
    thumbnailSize = 'b';
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    </>
  );
}


//Passsing JSX in a children prop

Question C
Passing JSX in a children prop 
Extract a Card component from the markup below, and use the children prop to pass different JSX to it:

export default function Profile() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </div>
      </div>
    </div>
  );
}

Solution for Question C


export default function Profile() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </div>
      </div>
    </div>
  );
}

*/