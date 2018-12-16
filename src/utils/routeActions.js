import router from 'umi/router';

export default  {
  goBack:()=>{
    router.goBack()
  },
  goForward:()=>{
    router.go(1)
  },
  gotoPath:(path)=>{
    router.push({
      pathname:path,
    });
  },
  gotoRoute:(route)=>{
    router.push(route);
  },
  gotoHref:(href)=>{
     window.open(href);
  },
}