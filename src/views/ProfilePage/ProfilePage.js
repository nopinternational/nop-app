import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
// core components
import Layout from "components/Layout/Layout.jsx";
import Article from "components/Article/Article.jsx";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.js";

import { getUser } from "services/firebase/auth";

const useStyles = makeStyles(styles);
const useLandingStyles = makeStyles(landingPageStyle);

export default function ProfilePage(props) {
  const legacy = false;
  const classes = useStyles();
  const classesLanding = useLandingStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  //const ctaLogin = [{ link: "login", text: "Logga in" }];

  const user = () => {
    const u = getUser();
    return u.displayName || "";
  };

  const profileDescription = "Lorem Ipsum";
  const newMarkup = (
    <Layout>
      <Parallax filter image={require("assets/img/zero.jpg").default}>
        <div className={classesLanding.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classesLanding.title}>Night of Passion</h1>
              <h4>Socialt. Passion. Sex.</h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div
        className={classNames(classesLanding.main, classesLanding.mainRaised)}
      >
        <div className={classesLanding.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={profile} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>{user()}</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <Article title="Beskrivning">
            <p className={classesLanding.description}>{profileDescription}</p>
          </Article>
          <div className={classes.description}>
            <p>
              An artist of considerable range, Chet Faker — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure.{" "}
            </p>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Profil",
                    tabIcon: SupervisorAccountIcon,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <Article title="Beskrivning">
                            <p className={classesLanding.description}>
                              {profileDescription}
                            </p>
                          </Article>
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: "Bilder",
                    tabIcon: PhotoLibraryIcon,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={work1}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={work2}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={work3}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={work4}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={work5}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                  // {
                  //   tabButton: "Vänner",
                  //   tabIcon: SupervisorAccountIcon,
                  //   tabContent: (
                  //     <GridContainer justify="center">
                  //       <GridItem xs={12} sm={12} md={4}>
                  //         <img
                  //           alt="..."
                  //           src={work4}
                  //           className={navImageClasses}
                  //         />
                  //         <img
                  //           alt="..."
                  //           src={studio3}
                  //           className={navImageClasses}
                  //         />
                  //       </GridItem>
                  //       <GridItem xs={12} sm={12} md={4}>
                  //         <img
                  //           alt="..."
                  //           src={work2}
                  //           className={navImageClasses}
                  //         />
                  //         <img
                  //           alt="..."
                  //           src={work1}
                  //           className={navImageClasses}
                  //         />
                  //         <img
                  //           alt="..."
                  //           src={studio1}
                  //           className={navImageClasses}
                  //         />
                  //       </GridItem>
                  //     </GridContainer>
                  //   ),
                  // },
                ]}
              />
            </GridItem>
          </GridContainer>
          <Article title="Rubrik">
            <p className={classesLanding.description}>Lorem ipsum</p>
          </Article>
        </div>
      </div>
    </Layout>
  );
  const legacyMarkup = (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Christian Louboutin</h3>
                    <h6>DESIGNER</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  return legacy ? legacyMarkup : newMarkup;
}
