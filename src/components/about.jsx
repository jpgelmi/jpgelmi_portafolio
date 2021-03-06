import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "Python", porcentage: "90%", value: "90" },
        { id: "CSS3_skill", content: "Desarrollo móvil", porcentage: "90%", value: "90" },
        {
          id: "JavaScript_skill",
          content: "Desarrollo web",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        { id: "PHP_skill", content: "Diseño", porcentage: "70%", value: "70" },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "He creado distintos proyectos en torno al desarrollo de software. Creando distintas aplicaciones móviles para IOS y Android. También he trabajado en distintos proyectos web, creando landing pages, portafolios, páginas personalizadas y mucho más."
        },
        {
          id: "second-p-about",
          content:
            "Recientemente he estado trabajando en torno a la automatización de actividades, como envio de mansajes, mails y creación de reportes."
        },
        {
          id: "third-p-about",
          content:
            " "
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Conóceme</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
