export const Payment = [
    {
      name: "Esewa",
      color: "limegreen",
      id: 1,
      logo: "https://th.bing.com/th/id/OIP.iJwN4-dPt7UkbndhLEycVAHaD4?rs=1&pid=ImgDetMain"
    },
    {
      name: "Khalti",
      color: "indigo",
      id: 2,
      logo: "https://yt3.ggpht.com/a/AATXAJxlvcOqurtA1Q7IPDbNKICwDmlbkH80bEEbxg=s900-c-k-c0xffffffff-no-rj-mo"
    },
    
  ];
  
  export const Item =[
    {
      id:1,
      image: 'https://atisutoevents.com/wp-content/uploads/2022/11/Weddings-03-min-scaled.jpg'
    },
    {
      id:2,
      image: "https://atisutoevents.com/wp-content/uploads/2022/11/Weddings-01-min-scaled.jpg"
    },
    {
      id:3,
      image: 'https://atisutoevents.com/wp-content/uploads/2022/11/All-07.png'
    },
    {
      id:4,
      image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      
    },
  ]
  export const Packages=[
      {
        id:1,
        type: "Wedding",
        image: 'https://i.pinimg.com/736x/89/2e/68/892e68300e1dbb3c0e531b4640c4ac25.jpg'  ,
        description: "This package includes everything you need for your dream wedding!",
        price: 2000,
        quantity: 1,
        discount: 0.1, // 10% discount
        reviews: [
          { user: "User1", comment: "Amazing experience!" },
          { user: "User2", comment: "Highly recommended!" }
        ]
      },
      {
        id:2,
        type: "Birthday",
    image:'https://i.pinimg.com/564x/f0/00/60/f00060d4895aea2baea560c9c6d1b3f3.jpg'
       ,
        description: "Celebrate your special day with our birthday package!",
        price: 500,
        quantity: 1,
        discount: 1, // No discount
        reviews: [
          { user: "User3", comment: "Great service!" },
          { user: "User4", comment: "Loved the decorations!" }
        ]
      },
      {
       id:3,
        type: "Conference",
    image:'https://i.pinimg.com/564x/79/1c/1b/791c1b4986647b49872a51832dd51c2b.jpg' 
,
        description: "Host your next conference with ease using our conference package!",
        price: 1000,
        quantity: 1,
        discount: 0.05, // 5% discount
        reviews: [
          { user: "User5", comment: "Excellent venue!" },
          { user: "User6", comment: "Good facilities!" }
        ]
      }
    
    
  ]