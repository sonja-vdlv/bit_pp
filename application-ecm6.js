class WebApp {
    constructor(name, url, technologies, licence, stars) {
        this.name = name;
        this.url = url;
        this.technologies = [];
        this.licence = licence;
        this.stars = stars;
    }

    getData() {
        return `${this.name}, ${this.url}, ${this.technologies}, ${this.licence}, ${this.stars}`;
    }

    addTechnologies(technologies) {
        return this.technologies.push(technologies);
    }

    reactBased() {
        if (this.technologies.indexOf(`react`) >= 0) {

            return true;
        }

    }
}

class MobileApp {
    constructor(name, platforms, licence, stars) {
        this.name = name;
        this.platforms = [];
        this.licence = licence;
        this.stars = stars;
    }

    addPlatforms(platforms) {
        return this.platforms.push(platforms);
    }

    getData() {
        return `${this.name}, ${this.platforms}, ${this.licence}, ${this.stars}`;
    }

    forAndroid() {
        if (this.platforms.indexOf(`android`) >= 0) {
            return true;
        }
    }
}
