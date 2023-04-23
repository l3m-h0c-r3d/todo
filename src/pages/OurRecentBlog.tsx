import BlogPost from "../components/BlogPost";
import img1 from "../assets/images/Image (1).png";
import img2 from "../assets/images/Image (2).png";
import img3 from "../assets/images/Images.png";

const about =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.";
const blog = [
  {
    title: "The Snap Pixel: How It Works and How to Install ",
    img: img1,
  },
  {
    title: "Global Partner Solutions: A Partnership of Innova",
    img: img2,
  },
  {
    title: "2021: An opportunity for Snapchatters to start fre",
    img: img3,
  },
];

const OurRecentBlog = () => {
  return (
    <div className="mx-10 my-10 p-3 ">
      <h1 className="w-full text-center font-bold text-xl">Our recent blog</h1>
      <p className="w-full text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </p>
      <div className="sm:flex w-2/3 mx-auto gap-20">
        {blog.map((itm) => (
          <BlogPost img={itm.img} title={itm.title} text={about} />
        ))}
      </div>
    </div>
  );
};

export default OurRecentBlog;
