export default profileData => {
  const { name, company } = profileData;
  const profileElem = document.querySelector('.profile');
  profileElem.textContent = `${name} from ${company}`;
};

let location1 = 'orderField=id&page=22&orderMode=desc&status=1';
let res = location1.split('&');
let pageStr = res.find(el => el.includes('page')).split('=');
console.log(pageStr);
