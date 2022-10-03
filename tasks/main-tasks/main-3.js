const path = "/users/download/index.html"

const isHtml = path => {

const needfulPart = ".html";
const pathPart = path.slice(-5);

if (needfulPart == pathPart) {
    return true }

    else {
        return false
    }
}

      console.log(isHtml(path))