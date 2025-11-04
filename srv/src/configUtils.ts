export const getDBURL = (origin) => {
  if (origin.includes('localhost')) {
    return process.env.FALLBACK_DATABASE_URL;
  }
    // https://portal-dev.si6tech.com is the origin example
    const appName = origin.split('://')[1].split('.')[0]; // portal-dev
    const dbURL = `${process.env.DATABASE_URL}${appName.replace('-', '_')}`;
    // if si6tech is there
    if (dbURL.includes('si6tech')) {
      if(dbURL.includes('educart')) {
        return dbURL.replace('educart','portal');
      }
      return dbURL;
    } else if (dbURL.includes("epe6")) {
      if (dbURL.includes("educart") || dbURL.includes("alumni")) {
        return dbURL.replace("educart_", "");
      }
      return dbURL;
    } else {
      if(dbURL.includes('educart')) {
        return dbURL.replace('educart','portal');
      }
      return dbURL;
    }
  };
  
  
  