/* import './ProjectData.css' */

export const projectsData = (
    <>
        <Card
            as={"section"}
            styles={'projects neo-5-out column'}
            title={"Projects"}
            content={
              <div className="project__container">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
            }
      />
    </>
)