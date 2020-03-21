const formatDate = ( time: any ) => {
    const Dates = new Date( time );
    const year: number = Dates.getFullYear();
    const month: any = ( Dates.getMonth() + 1 ) < 10 ? '0' + ( Dates.getMonth() + 1 ) : ( Dates.getMonth() + 1 );
    const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
    const dateR:string = year + '-' + month + '-' + day;
    return dateR;
};

export function getRangeDate ( range: number ) {
    let changeDate: string = "";
    if ( range ) {
          changeDate = formatDate( new Date().getTime() + ( 1000 * 3600 * 24 * range ) );
          console.log( changeDate );
          return changeDate;
        }
      else {
        changeDate = formatDate( new Date().getTime() + ( 1000 * 3600 * 24 * range ) );
        console.log( changeDate );
        return changeDate;
      }
}
