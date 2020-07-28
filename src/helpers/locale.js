export default function getPageTitleMaxLength(newJob){
  console.log(newJob);
  let maxLengthTitle = 0;

  Object.keys(newJob)
    .forEach(key => {
      console.log(key);
      if (newJob[key].pageTitle.length > maxLengthTitle){
        maxLengthTitle = newJob[key].pageTitle.length
      }
    })

  return maxLengthTitle;
}
