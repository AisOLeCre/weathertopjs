export const aboutController = {
  index(request, response) {
    const viewData = {
      title: "About Plalist",
    };
    console.log("about rendering");
    response.render("about-view", viewData);
  },
};
