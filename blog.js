const author = {
  image: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
  name: "Jese Leos",
  designation: "Graphic Designer, educator & CEO Flowbite",
  publishedDate: "Feb. 8, 2022"
};

let htmlStr = '<address class="flex items-center mb-6 not-italic">';

htmlStr += '<div class="inline-flex items-center mr-3 text-sm text-gray-900">';

// Correct way using template literals
htmlStr += `
  <img class="mr-4 w-16 h-16 rounded-full" 
       src="${author.image}" 
       alt="${author.name}">
`;

htmlStr += `
  <div>
    <a href="#" rel="author" class="text-xl font-bold text-gray-900">
      ${author.name}
    </a>

    <p class="text-base text-gray-500 dark:text-gray-400">
      ${author.designation}
    </p>

    <p class="text-base text-gray-500 dark:text-gray-400">
      <time pubdate datetime="2022-02-08" title="February 8th, 2022">
        ${author.publishedDate}
      </time>
    </p>
  </div>
`;

htmlStr += '</div>';
htmlStr += '</address>';

document.getElementById("author").innerHTML = htmlStr;
let blogDetail = `
<h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
  Best practices for success
</h1>

<h3>Best practices for setting up your prototype</h3>

<p>
  <strong>Low fidelity or high fidelity?</strong>
  Fidelity refers to how close a prototype will be to the real deal.
  If you're simply preparing a quick visual aid for a presentation,
  a low-fidelity prototype — like a wireframe with placeholder images
  and some basic text — would be more than enough.
  But if you're going for more intricate usability testing,
  a high-fidelity prototype — with on-brand colors, fonts, and imagery —
  could help get more pointed results.
</p>

<p>
  <strong>Consider your user.</strong>
  To create an intuitive user flow, try to think as your user would
  when interacting with your product. While you can fine-tune this
  during beta testing, considering your users' needs and habits early on
  will save you time by setting you on the right path.
</p>

<p>
  <strong>Start from the inside out.</strong>
  A nice way to both organize your tasks and create more user-friendly
  prototypes is by building your prototypes "inside out".
  Start by focusing on what will be important to your user,
  like a "Buy now" button or an image gallery,
  and list each element by order of priority.
  This way, you'll be able to create a prototype that puts your users'
  needs at the heart of your design.
</p>

<p>
  And there you have it! Everything you need to design and share
  prototypes — right in Flowbite Figma.
</p>
`;

document.getElementById("blogDetail").innerHTML = blogDetail;