// 1. Function declaration with default parameter
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// 2. Function expression with default parameter
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// 3. Higher-order function
function wrapAdjective(wrapper = "*") {
  return function(adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}
