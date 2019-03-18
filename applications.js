function WebApp(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = [];
    this.licence = licence;
    this.stars = stars;
}

function MobileApp(name, platforms, licence, stars) {
    this.name = name;
    this.platforms = [];
    this.licence = licence;
    this.stars = stars;
}

WebApp.prototype.getData = function () {
    return this.name + ", " + this.url + ", " + this.technologies + ", " + this.licence + ", " + this.stars;
}

WebApp.prototype.addTechnologies = function (technologies) {
    return this.technologies.push(technologies);
}

WebApp.prototype.reactBased = function () {
    if (this.technologies.indexOf("react") >= 0) {

        return true;
    }

};

MobileApp.prototype.addPlatforms = function (platforms) {
    return this.platforms.push(platforms);
}

MobileApp.prototype.getData = function () {
    return this.name + ", " + this.platforms + ", " + this.licence + ", " + this.stars;
}
MobileApp.prototype.forAndroid = function () {
    if (this.platforms.indexOf("android") >= 0) {
        return true;
    }
}

// function App(name, licence, stars) {
//     this.name = name;
//     this.licence = licence;
//     this.stars = stars;

//     this.isCCLicence = function () {
//         if (this.licence === "CC") {
//             return true;
//         } else {
//             ("This is not CC")
//         }
//     }

//     this.like = function () {
//         return this.stars += '*';
//     }

//     this.showStars = function () {
//         console.log(showStars());
//     }
// }



