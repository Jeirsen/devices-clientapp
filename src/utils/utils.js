function sortByName(a, b) {
  if (a.system_name > b.system_name) {
    return 1;
  } else if (a.system_name < b.system_name) {
    return -1;
  }
  return 0;
}

function sortByHddCapacity(a, b) {
  if (+a.hdd_capacity > +b.hdd_capacity) {
    return 1;
  } else if (+a.hdd_capacity < +b.hdd_capacity) {
    return -1;
  }
  return 0;
}

module.exports = {
  sortByName,
  sortByHddCapacity,
};
