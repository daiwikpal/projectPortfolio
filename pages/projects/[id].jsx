import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import * as FeatherIcons from "react-icons/fi";
import PagesMetaHead from "../../components/PagesMetaHead";
import { projectsData } from "../../data/projectsData";
import RelatedProjects from "../../components/projects/RelatedProjects";
import { useState, useEffect } from "react";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark'; 

function ProjectSingle(props) {
  const [activeTheme] = useThemeSwitcher();

  console.log(activeTheme);

  //   const theme = localStorage.getItem("theme");
  //   console.log(theme);

  const ExternalLinkButton = ({ linkInfo }) => {
    const Icon = FeatherIcons[linkInfo.icon];

    const handleClick = () => {
      window.open(linkInfo.url, "_blank");
    };

    return (
      <div className="flex items-center">
        <button
          className=" flex items-center hover:bg-indigo-500 dark:hover:bg-indigo-400 duration-300 bg-primary-dark dark:bg-primary-light dark:text-primary-dark text-white py-0.5 px-4 rounded-full cursor-pointer m-1  "
          onClick={handleClick}
        >
          <Icon className="w-5 h-5 mr-2  text-ternary-light dark:text-ternary-dark" />
          <span>{linkInfo.linkName}</span>
        </button>
      </div>
    );
  };
  // const markdown = `

  // # Header
  // ## Subheader
  // ### Subsubheader
  
  // A paragraph with a [link](https://reactjs.org).

  // pdf: 
  // <embed src="/files/DaiwikResumeShort.pdf" type="application/pdf" width="100%" height="600px" />
  
  // An image of a cutie patootie:
  // ![Image](https://bloximages.newyork1.vip.townnews.com/mdjonline.com/content/tncms/assets/v3/editorial/d/ed/ded1de6a-9343-11ec-96aa-8f8469c89fc5/6213d9793233f.image.jpg?resize=200%2C366)
  
  // An inline equation: 
  
  // A block equation:

  // The lift coefficient ($$a^2 + b^2$$) is a dimensionless coefficient
  
  
  // A paragraph with *emphasis* and __strong importance__.
  
  // > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  // * Lists
  //   * todo
  //   * done
  
  // A table:
  
  // | Left columns  | Right columns |
  // | ------------- | ------------- |
  // | left foo      | right foo     |
  // | left bar      | right bar     |
  // | left baz      | right baz     |
  
  // ~~~java
  // public class HelloWorld {
  //     public static void main(String[] args) {
  //         System.out.println("Hello, World!");
  //     }
  // }
  // ~~~
  
  // Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.
  // `

  return (
    <div className="container mx-auto">
      <PagesMetaHead title={props.project.title} />

      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {props.project.ProjectHeader.title}
        </p>
        <div className="flex">
          <div className="flex items-center mr-10">
            <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader.publishDate}
            </span>
          </div>
          <div className="flex items-center">
            <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader.tags}
            </span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {props.project.ProjectImages.map((project) => {
          return (
            <div className="mb-10 sm:mb-0" key={project.id}>
              <Image
                src={project.img}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                alt={project.title}
                key={project.id}
                layout="responsive"
                width={100}
                height={90}
              />
            </div>
          );
        })}
      </div>

      {/* Info */}
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Single project client details */}
          {/* <div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
							{props.project.ProjectInfo.ClientHeading}
						</p>
						<ul className="leading-loose">
							{props.project.ProjectInfo.CompanyInfo.map(
								(info) => {
									return (
										<li
											className="font-general-regular text-ternary-dark dark:text-ternary-light"
											key={info.id}
										>
											<span>{info.title}: </span>
											<a
												href="https://stoman.me"
												className={
													info.title === 'Website' ||
													info.title === 'Phone'
														? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
														: ''
												}
												aria-label="Project Website and Phone"
											>
												{info.details}
											</a>
										</li>
									);
								}
							)}
						</ul>
					</div> */}

          {/* Single project objectives */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.ObjectivesHeading}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {props.project.ProjectInfo.ObjectivesDetails}
            </p>
          </div>

          {/* Single project technologies */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.Technologies[0].title}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {props.project.ProjectInfo.Technologies[0].techs.join(", ")}
            </p>
          </div>

          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.LinksHeading}
            </p>

            <div className="flex">
              {props.project.ProjectInfo.LinksInfo.map((link) => (
                <ExternalLinkButton key={link.id} linkInfo={link} />
              ))}
            </div>
          </div>

          {/* Single project social sharing */}
          <div>
            {/* <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{props.project.ProjectInfo.SocialSharingHeading}
						</p>
						<div className="flex items-center gap-3 mt-5">
							{props.project.ProjectInfo.SocialSharing.map(
								(social, index) => {
									<Link
										key={index}
										href={social.url}
										target="__blank"
										passHref={true}
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</Link>;
								}
							)}
						</div> */}
          </div>
        </div>

        {/*  Single project right section details */}
        {/* TODO: convert this part to render an .md file with images, headers, bullet points, etc */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {props.project.ProjectInfo.ProjectDetailsHeading}
          </p>
          
          <ReactMarkdown
            className='prose'
            children={props.project.ProjectInfo.MarkdownContent} 
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
            components={{
              // Map `h1` (`# heading`) to use my tailwind css .
              h1: ({node, ...props}) => <p className='text-primary-dark dark:text-primary-light text-2xl font-bold mb-7' {...props} />,

              // Map `h2` (`## heading`) to use my tailwind css 
              h2: ({node, ...props}) => <p className='text-primary-dark dark:text-primary-light text-xl font-bold mb-7' {...props} />,
              
              h3: ({node, ...props}) => <p className='text-primary-dark dark:text-primary-light text-lg font-bold mb-7' {...props} />,

              p: ({node, ...props}) => <p className='font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light' {...props} />,

              a: ({node, ...props}) => <a className=' text-primary-dark dark:text-primary-light hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300' {...props} />,
              
              // bold text
              strong: ({node, ...props}) => <strong className='font-bold text-indigo-600' {...props} />,

              img: ({node, ...props}) => <img className='rounded-xl cursor-pointer shadow-lg sm:shadow-none' {...props} />,

              ul: ({node, ...props}) => <ul className='leading-loose' {...props} />,

              li: ({node, ...props}) => <li className='font-general-regular text-ternary-dark dark:text-ternary-light' {...props} />,

              table: ({node, ...props}) => <table className='rounded-xl' {...props} />,
              tr: ({node, ...props}) => <tr className='border px-4 py-2 bg-gray-100 ' {...props} />,
              th: ({node, ...props}) => <th className='border px-4 py-2 ' {...props} />,


              // syntax highlighting for code blocks in markdown
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                <code className={`${className}`} {...props}>
                  {children}
                </code>
                )
              }
            }}
          />
          {/* {props.project.ProjectInfo.ProjectDetails.map((details) => {
            return (
              <p
                key={details.id}
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                {details.details}
              </p>
            );
          })} */}
        </div>
      </div>

      {/* <RelatedProjects /> */}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  return {
    props: {
      project: projectsData.filter((project) => project.id === parseInt(id))[0],
    },
  };
}

export default ProjectSingle;
