const cUtil = {

  checkName(value) {
    // 이름이 공백인 경우
    if(value == '') { return true; }

    // 한글, 영어만 입력 제한
    var reg_name = /^[가-힣a-zA-Z]+$/;
    if(!reg_name.test(value)) { return true; }

    // 이름 길이 제한 확인
    if(value.length < 2 || value.length > 10) { return true; }

    return false;
  },

  checkId(value) {
    // 아이디가 공백인 경우
    if(value == '') { return true; }

    // 영어, 숫자만 입력 제한
    var reg_id = /^[a-zA-Z0-9]+$/;
    if(!reg_id.test(value)) { return true; }

    // 아이디 길이 제한 확인
    if(value.length < 2 || value.length > 16) { return true; }

    return false;
  },

  checkPassword(value) {
    // 비밀번호가 공백인 경우
    if(value == '') { return true; }

    var reg_password = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;'"<>,.?/\\|-]{1,18}$/;
    if(!reg_password.test(value)) { return true; }

    // 아이디 길이 제한 확인
    if(value.length < 8 || value.length > 18) { return true; }

    return false;
  },

  checkBirth(value) {
    // 생년월일이 공백인 경우
    if(value == '') { return true; }

    var reg_birth = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    return reg_birth.test(value) ? false : true;
  },

  checkEmail(value) {
    // 이메일이 공백인 경우
    if(value == '') { return true; }
    
    var reg_email = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if(!reg_email.test(value)) { return true; }

    // 이메일 길이 제한 확인
    if(value.length > 30) { return true; }

    return false;
  },

  checkPhone(value) {
    // 전화번호가 공백인 경우
    if(value == '') { return true; }

    var reg_phone = /^010([0-9]{4})?([0-9]{4})$/;
    return reg_phone.test(value) ? false : true;
  }
}

export default cUtil;