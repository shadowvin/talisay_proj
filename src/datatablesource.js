export const nameColumns = [
  { field: "id", headerName: "ID", width: 10 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="photo" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
  },

  {
    field: "address",
    headerName: "Address",
    width: 200,
  },
  {
    field: "glink",
    headerName: "Google Link",
    width: 160,
  },
];

//temporary data
export const nameRows = [
  {
    id: 1,
    name: "Lorem ipsum dolor ",
    img: "https://imaddresss.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    glink: "https://goo.gl/maps/SduZUpD3qqUg2dwr5",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. @gmail.com",
    address: "Purok- 5 Brgy.Santa Cruz",
  },
  {
    id: 2,
    name: "Lorem ipsum dolor",
    img: "https://imaddresss.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "2snow@Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. .com",
    glink: "https://goo.gl/maps/SduZUpD3qqUg2dwr5",
    address: "Purok- 5 Brgy.Santa Cruz",
  },
  {
    id: 3,
    name: "Lorem ipsum dolor ",
    img: "https://imaddresss.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. @gmail.com",
    glink: "https://goo.gl/maps/SduZUpD3qqUg2dwr5",
    address: "Purok- 5 Brgy.Santa Cruz",
  },
  {
    id: 4,
    name: "Lorem ipsum dolor ",
    img: "https://imaddresss.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. @gmail.com",
    glink: "https://goo.gl/maps/SduZUpD3qqUg2dwr5",
    address: "Purok- 5 Brgy.Santa Cruz",
  },
  {
    id: 5,
    name: "Lorem ipsum dolor ",
    img: "https://imaddresss.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. @gmail.com",
    glink: "https://goo.gl/maps/SduZUpD3qqUg2dwr5",
    address: "Purok- 5 Brgy.Santa Cruz",
  },
  {
    id: 6,
    name: "Lorem ipsum dolor ",
    img: "https://imaddresss.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "6snow@Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. .com",
    glink: "https://goo.gl/maps/SduZUpD3qqUg2dwr5",
    address: "Purok- 5 Brgy.Santa Cruz",
  },
  {
    id: 7,
    name: "Lorem ipsum dolor ",
    img: "https://imaddresss.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "7snow@Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. .com",
    glink: "https://goo.gl/maps/SduZUpD3qqUg2dwr5",
    address: "Purok- 5 Brgy.Santa Cruz",
  },
  {
    id: 8,
    name: "Lorem ipsum dolor ",
    img: "https://imaddresss.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "8snow@gLorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. mail.com",
    glink: "https://goo.gl/maps/SduZUpD3qqUg2dwr5",
    address: "Purok- 5 Brgy.Santa Cruz",
  },
  {
    id: 9,
    name: "Lorem ipsum dolor ",
    img: "https://imaddresss.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "snow@Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. .com",
    glink: "https://goo.gl/maps/SduZUpD3qqUg2dwr5",
    address: "Purok- 5 Brgy.Santa Cruz",
  },
  {
    id: 10,
    name: "Lorem ipsum dolor ",
    img: "https://imaddresss.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "snow@Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. .com",
    glink: "https://goo.gl/maps/SduZUpD3qqUg2dwr5",
    address: "Purok- 5 Brgy.Santa Cruz",
  },
];
