export function fetchPicture(name, page) {
  return fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=28085560-20e71cd79b088a688c0cfa752&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject();
  });
}