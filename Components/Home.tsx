import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container" id="hero1">
      <div className="hero" id="hero2">
        <nav>
          <a className="logo">Jahanzaib.</a>

          <div className="nav-links" id="hero3">
            <Link href="#" className="active">Home</Link>
            <Link href="/About">About</Link>
            <Link href="#">Services</Link>
            <a href="https://shahzaib-portfolio-website.vercel.app/">Portfolio</a>
            <Link href="/ContactUs">Contact</Link>
          </div>
        </nav>

        <div className="content">
          <div className="div-text">
            <h1>Hi, I&apos;m Shahzaib</h1>
            <h4>Frontend Web Developer</h4>
            <p>
              Hi, I&apos;m Jahanzaib Nadeem, a passionate software developer and tech enthusiast from Karachi, Pakistan. With a keen interest in cybersecurity, software development, and artificial intelligence, I love crafting efficient and innovative solutions that make a difference. My journey in programming has been fueled by a commitment to continuous learning and a drive to tackle challenges head-on. Currently, I specialize in developing robust applications with JavaScript and TypeScript, ensuring a seamless blend of performance and user experience. Insha&apos;Allah.
            </p>
            <a href="/Shahzaib.CV1.pdf.pdf" className="btn" download>Download CV</a>
          </div>

          <div className="div-img">
            <Image src="/images/image1.png" alt="Shahzaib's Image" height={440} width={400} />
          </div>
        </div>

        <div className="soc-links">
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.youtube.com/@hatamtech7708"><i className="fa-brands fa-youtube"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/__shahzaib_47__/"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
}
