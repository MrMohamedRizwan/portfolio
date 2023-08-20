import BlogItem from "./BlogItem";
import Degree from "./degree";
import Degree2 from "./degree2";
import Degree3 from "./degree3";
// import projects from "../"
export default function BlogList({ publications }) {
  let posts = publications.data.user.publication.posts;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* {posts.map((post, index) => {
        return (
          <div key={index} className="flex">
            <BlogItem post={post} />
          </div>
        );
      })} */}
      <div>
      <Degree>

      </Degree>
      
      </div>
      <div >
      <Degree2>

      </Degree2>
      
      </div>
      <div >
      <Degree3>

      </Degree3>
      
      </div>
      {/* {projects.map(function (project, i) {
                return <ProjectCard project={project} key={i} />;
              })} */}
            
    </div>
  );
}
