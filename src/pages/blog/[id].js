import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";
import axiosInstance from "../../../axios/axios";
import { Container, Row, Col, Image } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "@/styles/Blogs.module.css";
import "@/styles/Blogs.module.css";
import { formatDate } from "../../utils/helper";
import {
  BsWhatsapp,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
  BsShareFill,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdMenuBook } from "react-icons/md";

const SingleBlog = ({ blog }) => {
  const [blogData, setBlogData] = useState(blog || {});
  const [loading, setLoading] = useState(!blog);
  const [readingTime, setReadingTime] = useState(0);
  const router = useRouter();
  const { isReady, query } = router;

  useEffect(() => {
    if (isReady && query.id) {
      fetchBlogData(query.id);
    }
  }, [isReady, query.id]);

  useEffect(() => {
    const blogDiv = document.querySelector(".blogDisc");
    if (blogDiv) {
      const images = blogDiv.querySelectorAll("img");
      images.forEach((img) => {
        img.removeAttribute("height");
        img.removeAttribute("width");
      });
    }
  }, [blogData]);

  const fetchBlogData = async (id) => {
    try {
      const res = await axiosInstance.get(`/getBlogBySlug/${id}`);
      if (res.status === 200) {
        const blog = res.data.data[0];
        setBlogData(blog);
        calculateReadingTime(blog.description);
        setLoading(false);
      }
    } catch (err) {
      console.error("Error fetching blog data:", err);
      setLoading(false);
    }
  };

  const calculateReadingTime = (content) => {
    const wordCount = content?.split(" ").length || 0;
    const time = Math.ceil(wordCount / 150);
    setReadingTime(time);
  };

  const BlogContent = (content) => {
    const sanitizedContent = DOMPurify.sanitize(content);
    return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
  };

  const shareUrl = (platform) => {
    const currentUrl = `https://nextupgrad.us/blog/${query?.id}`;
    const title = encodeURIComponent(blogData?.title || "Blog");

    switch (platform) {
      case "whatsapp":
        return `https://wa.me/?text=${title} - ${currentUrl}`;
      case "linkedin":
        return `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${title}`;
      case "pinterest":
        return `https://pinterest.com/pin/create/button/?url=${currentUrl}&description=${title}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?text=${title}&url=${currentUrl}`;
      default:
        return "#";
    }
  };

  return (
    <>
      <Head>
        <title>{blogData?.title || "Blog - NextUpgrad USA"}</title>
        <meta name="title" content={blogData?.title || "Nextupgrad"} />
        <meta
          name="description"
          content={
            blogData?.short_description?.substring(0, 160) ||
            "Dive into our blog for insights into Web and Software."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://nextupgrad.us/blog/${query?.id}`}
        />
        <meta property="og:title" content={blogData?.title || "Nextupgrad"} />
        <meta
          property="og:description"
          content={
            blogData?.short_description?.substring(0, 160) ||
            "Expert insights into Web and Software."
          }
        />
        <meta
          property="og:image"
          content={
            blogData?.banner_image
              ? process.env.NEXT_PUBLIC_IMAGE_URL + blogData?.banner_image
              : "https://nextupgrad.us/logo-2orange-1.webp"
          }
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://nextupgrad.us/blog/${query?.id}`}
        />
        <meta
          property="twitter:title"
          content={blogData?.title || "Nextupgrad"}
        />
        <meta
          property="twitter:description"
          content={
            blogData?.short_description?.substring(0, 160) ||
            "Expert insights into Web and Software."
          }
        />
        <meta
          property="twitter:image"
          content={
            blogData?.banner_image
              ? process.env.NEXT_PUBLIC_IMAGE_URL + blogData?.banner_image
              : "https://nextupgrad.us/logo-2orange-1.webp"
          }
        />
      </Head>
      <div className={styles.singleMain}>
        <section
          className={styles.singleBnr}
          style={{ backgroundColor: `${blogData?.color_code || ""}` }}
        >
          <Container>
            <Row className="justify-content-between">
              <Col className="col-md-6 align-content-center">
                <h1>{blogData?.title}</h1>
                <div>
                  <Link href="/blog">Blogs</Link>
                  <IoIosArrowForward />
                  <Link href="#">This Article</Link>
                </div>
              </Col>
              <Col className="col-md-5">
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${blogData?.banner_image}`}
                  alt={blogData?.title}
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.singleCont}>
          <Container>
            <Row className="mb-4 justify-content-center">
              <Col className="col-md-9">
                <div className={styles.authorMeta}>
                  <div className={styles.authorImg}>
                    <Image
                      src={
                        blogData?.author_image
                          ? process.env.NEXT_PUBLIC_IMAGE_URL +
                            blogData.author_image
                          : "/assets/author.png"
                      }
                      alt={blogData?.author || "Author"}
                      width={100}
                      height={100}
                    />
                    <p className="m-0">{blogData?.author}</p>
                    <Link
                      href={
                        blogData?.author_handle || "https://www.linkedin.com/"
                      }
                      target="_blank"
                      style={{ textTransform: "lowercase", color: "#e76f51" }}
                    >
                      <span>@</span>
                      {blogData?.author}
                    </Link>
                  </div>
                  <div className={styles.authorCont}>
                    <p>
                      {blogData?.author_bio ||
                        "This is the Author of this blog."}
                    </p>
                    <ul>
                      <li>
                        <SlCalender />{" "}
                        {blogData?.created_at
                          ? formatDate(blogData?.created_at)
                          : ""}
                      </li>
                      <li>
                        <MdMenuBook /> {readingTime} min read
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
            {loading ? (
              <SkeletonTheme
                color="var(--skeleton-color)"
                highlightColor="var(--skeleton-highlight-color)"
              ></SkeletonTheme>
            ) : (
              <Row className="justify-content-center">
                <Col className="col-md-9">
                  <div className={styles.descBlg}>{BlogContent(blogData?.description)}</div>
                </Col>
              </Row>
            )}
          </Container>
          <div className={styles.sdeMain}>
            <ul>
              <li>
                <div className={styles.sdeOne}>
                  <Link href="/hire-dedicated-developer" target="_blank">
                    <AiFillSetting />
                    <p className="m-0">View Our Services</p>
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.sdeTwo}>
                  <Link href="/contact-us" target="_blank">
                    <BsArrowUpRightCircleFill />
                    <p className="m-0">
                      Have an Idea Request
                      <br />A Quote
                    </p>
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.sdeThree}>
                  <BsShareFill />
                  <p className="m-0">Share this blog</p>
                </div>
                <div className={styles.socioLnk}>
                  <Link href={shareUrl("whatsapp")} target="_blank">
                    <BsWhatsapp />
                  </Link>
                  <Link href={shareUrl("linkedin")} target="_blank">
                    <BsLinkedin />
                  </Link>
                  <Link href={shareUrl("pinterest")} target="_blank">
                    <BsPinterest />
                  </Link>
                  <Link href={shareUrl("twitter")} target="_blank">
                    <BsTwitter />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  let blog = null;

  try {
    const blogRes = await axiosInstance.get(`/getBlogBySlug/${id}`);
    if (blogRes.status === 200) {
      blog = blogRes.data.data[0];
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }

  return {
    props: {
      blog,
    },
  };
}

export default SingleBlog;
