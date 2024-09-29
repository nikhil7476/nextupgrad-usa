import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Header.module.css";
import brand from "@/assets/logo.webp";

const MegaMenuNavbar = () => {
  return (
    <>
      <div className={styles.hdrMain}>
        <nav className={styles.hdrNav}>
          <ul className={`container ${styles["ulHdrReset"]}`}>
            <li>
              <Link href="/" title="Nextupgrad USA">
                <Image
                  src={brand}
                  width={"100%"}
                  height={100}
                  alt="nextupgrad_usa_logo"
                  title="Nextupgrad USA Logo"
                />
              </Link>
            </li>
            <li className={styles.droppable}>
              <Link href="#">SEO & Lead Generation </Link>
              <div className={styles.megaMenu}>
                <div className={`container ${styles["cf"]}`}>
                  <ul className={styles.ulReset}>
                    <h3>Organic SEO</h3>
                    <li>
                      <Link href="#">SEO Services</Link>
                    </li>
                    <li>
                      <Link href="#">Enterprise SEO Services</Link>
                    </li>
                    <li>
                      <Link href="#">Digital Marketing Services</Link>
                    </li>
                    <li>
                      <Link href="#">Google Local Services Ads Management</Link>
                    </li>
                    <li>
                      <Link href="#">SEO Audits</Link>
                    </li>
                    <li>
                      <Link href="#">
                        Generative Engine & Chat Optimization
                      </Link>
                    </li>
                  </ul>
                  <ul className={styles.ulReset}>
                    <h3>Digital Advertising</h3>
                    <li>
                      <Link href="#">PPC Management Services</Link>
                    </li>
                    <li>
                      <Link href="#">Enterprise PPC Management Services</Link>
                    </li>
                    <li>
                      <Link href="#">Social Media Advertising</Link>
                    </li>
                    <li>
                      <Link href="#">Enterprise Social Media Advertising</Link>
                    </li>
                  </ul>
                  <ul className={styles.ulReset}>
                    <h3>Ecommerce</h3>
                    <li>
                      <Link href="#">Ecommerce SEO Services</Link>
                    </li>
                    <li>
                      <Link href="#">Ecommerce PPC Services</Link>
                    </li>
                    <li>
                      <Link href="#">Ecommerce Social Media Advertising</Link>
                    </li>
                    <li>
                      <Link href="#">B2B Ecommerce Enablement</Link>
                    </li>
                    <li>
                      <Link href="#">Ecommerce Digital Marketing Services</Link>
                    </li>
                    <li>
                      <Link href="#">Ecommerce Marketing Resources</Link>
                    </li>
                  </ul>
                  <ul className={styles.ulReset}>
                    <h3>Learn</h3>
                    <li>
                      <Link href="#">Our SEO Results</Link>
                    </li>
                    <li>
                      <Link href="#">Our SEO Case Studies</Link>
                    </li>
                    <li>
                      <Link href="#">What Is an SEO Company?</Link>
                    </li>
                    <li>
                      <Link href="#">How to Find the Best SEO Company</Link>
                    </li>
                    <li>
                      <Link href="#">SEO Guide for Marketing Managers</Link>
                    </li>
                    <li>
                      <Link href="#">What Is Digital Marketing?</Link>
                    </li>
                    <li>
                      <Link href="#">Best Digital Marketing Tools</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.droppable}>
              <Link href="#">Revenue Marketing & CRO</Link>
              <div className={styles.megaMenu}>
                <div className={`container ${styles["cf"]}`}>
                  <ul className={styles.ulReset}>
                    <h3>Conversion</h3>
                    <li>
                      <Link href="#">Conversion Rate Optimization</Link>
                    </li>
                    <li>
                      <Link href="#">User Experience Testing</Link>
                    </li>
                    <li>
                      <Link href="#">Landing Pages & Funnels</Link>
                    </li>
                    <li>
                      <Link href="#">Online Review Acceleration</Link>
                    </li>
                    <li>
                      <Link href="#">Website Personalization</Link>
                    </li>
                  </ul>
                  <ul className={styles.ulReset}>
                    <h3>Marketing Automation</h3>
                    <li>
                      <Link href="#">Account-Based Marketing Services</Link>
                    </li>
                    <li>
                      <Link href="#">Lead Nurture Email Marketing</Link>
                    </li>
                    <li>
                      <Link href="#">Email Marketing Management</Link>
                    </li>
                    <li>
                      <Link href="#">Salesforce Marketing Automation</Link>
                    </li>
                    <li>
                      <Link href="#">
                        Microsoft Dynamics Marketing Automation
                      </Link>
                    </li>
                  </ul>
                  <ul className={styles.ulReset}>
                    <h3>E-commerce Platefom</h3>
                    <li>
                      <Link href="#">SEO for Amazon</Link>
                    </li>
                    <li>
                      <Link href="#">Advertising Management for Amazon</Link>
                    </li>
                    <li>
                      <Link href="#">Facebook Marketplace for Business</Link>
                    </li>
                    <li>
                      <Link href="#">Influencer Marketing Services</Link>
                    </li>
                    <li>
                      <Link href="#">Walmart Marketplace Advertising</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.droppable}>
              <Link href="#">Design & Development</Link>
              <div className={styles.megaMenu}>
                <div className={`container ${styles["cf"]}`}>
                  <ul className={styles.ulReset}>
                    <h3>Design</h3>
                    <li>
                      <Link href="#">Website Design</Link>
                    </li>
                    <li>
                      <Link href="#">Website Redesign</Link>
                    </li>
                    <li>
                      <Link href="#">Rapid Website Design</Link>
                    </li>
                    <li>
                      <Link href="#">Social Media Design</Link>
                    </li>
                    <li>
                      <Link href="#">E-commerce Website Design</Link>
                    </li>
                    <li>
                      <Link href="#">Email Marketing Testing & Design </Link>
                    </li>
                  </ul>
                  <ul className={styles.ulReset}>
                    <h3>Content Marketing</h3>
                    <li>
                      <Link href="#">SEO Copywriting</Link>
                    </li>
                    <li>
                      <Link href="#">Content Marketing Services</Link>
                    </li>
                    <li>
                      <Link href="#">Social Media Management</Link>
                    </li>
                    <li>
                      <Link href="#">Inforgraphic & Motion Graphics</Link>
                    </li>
                    <li>
                      <Link href="#">Youtube Advertising</Link>
                    </li>
                  </ul>
                  <ul className={styles.ulReset}>
                    <h3>Website Development</h3>
                    <li>
                      <Link href="#">Digital Experience Development</Link>
                    </li>
                    <li>
                      <Link href="#">Shopify E-commerce Development</Link>
                    </li>
                    <li>
                      <Link href="#">Magento E-commerce Development</Link>
                    </li>
                    <li>
                      <Link href="#">WordPress Development</Link>
                    </li>
                    <li>
                      <Link href="#">Wix</Link>
                    </li>
                    <li>
                      <Link href="#">Duda</Link>
                    </li>
                    <li>
                      <Link href="#">Square Space</Link>
                    </li>
                    <li>
                      <Link href="#">Web Flow</Link>
                    </li>
                    <li>
                      <Link href="#">Custom Website Development</Link>
                    </li>
                    <li>
                      <Link href="#">Web Infrastructure & Maintenance</Link>
                    </li>
                    <li>
                      <Link href="#">AI & GPT Integration</Link>
                    </li>
                    <li>
                      <Link href="#">Content Management Systems</Link>
                    </li>
                  </ul>
                  <ul className={styles.ulReset}>
                    <h3>Mobile App Development</h3>
                    <li>
                      <Link href="#">iOS App Development</Link>
                    </li>
                    <li>
                      <Link href="#">Android App Development</Link>
                    </li>
                    <li>
                      <Link href="#">Cross-Platform App Development</Link>
                    </li>
                    <li>
                      <Link href="#">Progressive Web App Development</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.droppable}>
              <Link href="#">Technology</Link>
              <div className={styles.megaMenu}>
                <div className={`container ${styles["cf"]}`}>
                  <ul className={styles.ulReset}>
                    <h3>Revenue Acceleration Platform</h3>
                    <li>
                      <Link href="#">Conversion Rate Optimization</Link>
                    </li>
                    <li>
                      <Link href="#">User Experience Testing</Link>
                    </li>
                    <li>
                      <Link href="#">Landing Pages & Funnels</Link>
                    </li>
                    <li>
                      <Link href="#">Online Review Acceleration</Link>
                    </li>
                    <li>
                      <Link href="#">Website Personalization</Link>
                    </li>
                  </ul>
                  <ul className={styles.ulReset}>
                    <h3>Measurement</h3>
                    <li>
                      <Link href="#">Account-Based Marketing Services</Link>
                    </li>
                    <li>
                      <Link href="#">Lead Nurture Email Marketing</Link>
                    </li>
                    <li>
                      <Link href="#">Email Marketing Management</Link>
                    </li>
                    <li>
                      <Link href="#">Salesforce Marketing Automation</Link>
                    </li>
                    <li>
                      <Link href="#">
                        Microsoft Dynamics Marketing Automation
                      </Link>
                    </li>
                  </ul>
                  <ul className={styles.ulReset}>
                    <h3>Resorces</h3>
                    <li>
                      <Link href="#">What Is a CRM?</Link>
                    </li>
                    <li>
                      <Link href="#">Data-Driven Marketing Guide</Link>
                    </li>
                    <li>
                      <Link href="#">What Is a CDP?</Link>
                    </li>
                    <li>
                      <Link href="#">What Is ERP?</Link>
                    </li>
                    <li>
                      <Link href="#">What Is AI Marketing?</Link>
                    </li>
                    <li>
                      <Link href="#">What are CRM Integrations?</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.droppable}>
              <Link href="#">Who We Are</Link>
              <div className={styles.megaMenu}>
                <div className={`container ${styles["cf"]}`}>
                  <ul className={styles.ulReset}>
                    <h3>Who We Are</h3>
                    <li>
                      <Link href="#">Our Approach</Link>
                    </li>
                    <li>
                      <Link href="#">About Us</Link>
                    </li>
                    <li>
                      <Link href="#">Careers (We Are Hiring!)</Link>
                    </li>
                    <li>
                      <Link href="#">Contact Info</Link>
                    </li>
                    <li>
                      <Link href="#">WebFX Reviews</Link>
                    </li>
                    <li>
                      <Link href="#">Awards</Link>
                    </li>
                  </ul>
                  <ul className={styles.ulReset}>
                    <h3>Community Impact</h3>
                    <li>
                      <Link href="#">Company Values</Link>
                    </li>
                    <li>
                      <Link href="#">Community Impact</Link>
                    </li>
                    <li>
                      <Link href="#">FXBuilds</Link>
                    </li>
                    <li>
                      <Link href="#">Equality at WebFX</Link>
                    </li>
                    <li>
                      <Link href="#">STEMFX Program</Link>
                    </li>
                    <li>
                      <Link href="#">WebFX History</Link>
                    </li>
                  </ul>
                  <ul className={styles.ulReset}>
                    <h3>Pricing Guides</h3>
                    <li>
                      <Link href="#">How Much Should a Website Cost?</Link>
                    </li>
                    <li>
                      <Link href="#">How Much Does PPC Cost?</Link>
                    </li>
                    <li>
                      <Link href="#">Email Marketing Pricing</Link>
                    </li>
                    <li>
                      <Link href="#">Social Media Pricing</Link>
                    </li>
                    <li>
                      <Link href="#">SEO Pricing</Link>
                    </li>
                    <li>
                      <Link href="#">Local SEO Pricing</Link>
                    </li>
                  </ul>
                  <ul className={styles.ulReset}>
                    <h3>Content Library</h3>
                    <li>
                      <Link href="#">SEO for Amazon</Link>
                    </li>
                    <li>
                      <Link href="#">Advertising Management for Amazon</Link>
                    </li>
                    <li>
                      <Link href="#">Facebook Marketplace for Business</Link>
                    </li>
                    <li>
                      <Link href="#">Influencer Marketing Services</Link>
                    </li>
                    <li>
                      <Link href="#">Walmart Marketplace Advertising</Link>
                    </li>
                  </ul>
                  <ul className={styles.ulReset}>
                    <h3>Resource</h3>
                    <li>
                      <Link href="#">Infographic</Link>
                    </li>
                    <li>
                      <Link href="#">Blog</Link>
                    </li>
                    <li>
                      <Link href="#">E-Books</Link>
                    </li>
                    <li>
                      <Link href="#">Lead Magnet</Link>
                    </li>
                    <li>
                      <Link href="#">Podcast</Link>
                    </li>
                    <li>
                      <Link href="#">What Is an SEO Company?</Link>
                    </li>
                    <li>
                      <Link href="#">How to Find the Best SEO Company</Link>
                    </li>
                    <li>
                      <Link href="#">SEO Guide for Marketing Managers</Link>
                    </li>
                    <li>
                      <Link href="#">What Is Digital Marketing?</Link>
                    </li>
                    <li>
                      <Link href="#">Best Digital Marketing Tools</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.btnCall}>
              <Link href="https://calendly.com/ron-wilsonbdm/service" title="Let's Discuss">
                {"Let's Discuss"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MegaMenuNavbar;
