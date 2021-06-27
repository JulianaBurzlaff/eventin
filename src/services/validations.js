export function fullnameRequired(value) {
  if (!value) {
    return "Full name required";
  }
  return undefined;
}

export function usernameRequired(value) {
  if (!value) {
    return "Username required";
  }
  return undefined;
}

export function passwordRequired(value) {
  if (!value) {
    return "Password required";
  }
  if (value.length < 4) {
    return "The password must be at least four characters long.";
  }
  return undefined;
}

export function eventRequired(value) {
  if (!value) {
    return "Event required";
  }
  return undefined;
}

export function eventNameRequired(value) {
  if (!value) {
    return "Event name required";
  }
  return undefined;
}

export function dateRequired(value) {
  if (!value) {
    return "Date required";
  }
  return undefined;
}

export function timeRequired(value) {
  if (!value) {
    return "Time required";
  }
  return undefined;
}

export function locationRequired(value) {
  if (!value) {
    return "Location Required";
  }
  return undefined;
}

export function descriptionRequired(value) {
  if (!value) {
    return "Description Required";
  }
  return undefined;
}

export function imageRequired(value) {
  if (!value) {
    return "Description Required";
  }
  return undefined;
}
