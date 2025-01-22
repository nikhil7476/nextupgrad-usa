import Link from "next/link";
import Head from "next/head";
import axiosInstance from "../../axios/axios";
import { useEffect, useState } from "react";
import { formatDate } from "../utils/helper";
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "@/styles/Blogs.module.css";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  ListGroup,
  Button,
} from "react-bootstrap";
import { BiSolidCategory } from "react-icons/bi";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsBackup, setBlogsBackup] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    let filteredBlogs = blogsBackup;

    if (searchQuery !== "") {
      filteredBlogs = filteredBlogs.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "") {
      filteredBlogs = filteredBlogs.filter(
        (item) => item.catogary === selectedCategory
      );
    }

    setBlogs(filteredBlogs);
  }, [searchQuery, selectedCategory, blogsBackup]);

  const getBlogs = async () => {
    try {
      const res = await axiosInstance.get("/getBlog");
      if (res.status === 200) {
        setTimeout(() => {
          const sortedBlogs = res.data.data.sort(
            (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
          );
          setBlogs(sortedBlogs);
          setBlogsBackup(sortedBlogs);
        }, 1500);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
  };

  function stripHtml(html) {
    let doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
  return (
    <>
      <Head>
        <title>Blog for NextUpgrad USA</title>
        <meta name="title" content="Blog for NextUpgrad USA" />
        <meta
          name="description"
          content="Get into our blog for expert and valuable insights into Web and Software. It offers knowledge to fuel your curiosity and online business growth."
        />
      </Head>
      <div className={styles.blgMain}>
        <section className={styles.blgBnr}>
          <Container>
            <Row>
              <Col>
                <h1>
                  <span>Blogs</span>
                  <br />
                  Your Gateway to Knowledge, Tips, and Inspiration
                </h1>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.blgCont}>
          <Container>
            <Row className="mb-4">
              <Col>
                <div className={styles.blogCats}>
                  <h2>Categories :</h2>
                  <ul className={styles.categories}>
                    {[
                      "Hire Dedicated Developers",
                      "Digital Marketing",
                      "Mobile App Development",
                      "Software Development",
                      "Web Development",
                    ].map((category, index) => (
                      <li
                        key={index}
                        className={
                          selectedCategory === category
                            ? styles.activeCategory
                            : ""
                        }
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="col-md-8">
                <Row>
                  {blogs.length ? (
                    blogs.map((item, index) => (
                      <Col key={index} className="col-md-6 mb-4">
                        <div className={styles.blgCard}>
                          <Link href={`/blog/${item.slug}`} target="_blank">
                            <div className={styles.blgFeat}>
                              <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.banner_image}`}
                                alt={item.title}
                              />
                            </div>
                          </Link>
                          <div>
                            <h3>
                              <span className={styles.cat}>
                                <BiSolidCategory /> {item.catogary}
                              </span>
                              <br />
                              <Link href={`/blog/${item.slug}`} target="_blank">
                                {item.title}
                              </Link>
                            </h3>
                            <div className={styles.blgMeta}>
                              <p>
                                <FaUser /> {item.author}
                              </p>
                              <p>
                                <SlCalender /> {formatDate(item.updated_at)}
                              </p>
                            </div>
                            <p>
                              {stripHtml(item.description)
                                .split(" ")
                                .slice(0, 20)
                                .join(" ")}
                              ...
                            </p>
                          </div>
                        </div>
                      </Col>
                    ))
                  ) : (
                    <div>
                      <h3>No Blogs Found</h3>
                    </div>
                  )}
                </Row>
              </Col>
              <Col className="col-md-4">
                <div>
                  <div className="mb-4">
                    <h3>Search</h3>
                    <input
                      type="text"
                      placeholder="Search for articles..."
                      className={styles.searchInput}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div>
                    <h3>Recent Blogs</h3>
                    {blogs.length ? (
                      <ul className={styles.recentBlgs}>
                        {blogs.slice(0, 5).map((item, index) => (
                          <li key={index}>
                            <Link href={`/blog/${item.slug}`} target="_blank">
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <SkeletonTheme color="#2c2c2c" highlightColor="#444">
                        <Skeleton count={5} />
                      </SkeletonTheme>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Blog;

function stripHtml(html) {
  let doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}
