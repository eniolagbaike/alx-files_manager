console.log('Please enter your date of birth in the format yyyy-mm-dd: ');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const D_O_B = process.stdin.read();
  function getAge(D_O_B) {
    if (D_O_B) {
      const birthDate = new Date(D_O_B);
      const today = new Date();
      let ageYears = today.getFullYear() - birthDate.getFullYear();
      let ageMonths = today.getMonth() - birthDate.getMonth();
      let ageDays = today.getDate() - birthDate.getDate();

      if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears -= 1;
        ageMonths += 12;
      }

      if (ageMonths === 12) {
        ageYears += 1;
        ageMonths = 0;
      }

      if (ageDays < 0) {
        const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += daysInLastMonth;
        ageMonths -= 1;
      }

      const message = `${ageYears}years ${ageMonths}months and ${ageDays}days old.`;
      return (`Your date of birth is ${birthDate.toDateString()} and you're now ${message}`);
    }
  }
  console.log(getAge(D_O_B));
});