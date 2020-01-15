const components = {};

components.nav = `
    <div class="nav-bar">
        <div class="logo">

        </div>
        <div class="user-information">
            <div class="user-avatar"></div>
            <div class="user-name"></div>
            <button onclick="controller.logOut()">Log Out</button>
        </div>
                
    </div>
`;

components.welcomePage = `
<div class="nav-bar">
            <div class="logo">
                <span>ViecVat</span>
            </div>
        </div>
        <div class="main-register">
            <div class="register-btn-wrapper" id="employer-container">
                <div class="register-content">Bạn đang muốn tìm người làm ?</div>
                <div class="register-btn" id="employer-sign-up-btn">Đăng kí ngay !!!</div>
                
            </div>
            <div class="register-btn-wrapper" id="job-seeker-container">
                <div class="register-content">Bạn đang muốn tìm việc làm ?</div>
                <div class="register-btn" id="job-seeker-sign-up-btn"> Đăng kí ngay !!!</div>
            </div>
            
            <div id="already-have-account-btn">Already have an account? Sign in</div>

        </div>
        <div id="footer">
            <span>About Us</span>
        </div>
`
components.employerRegister = `
    <section class="register-container">
                <form id="form-register" class="form-register">
                    <div class="form-header">
                        <h3>Sign up</h3>
                    </div>
                    <div class="form-content">
                        <div class="name-wrapper">
                            <div class="input-wrapper">
                                <input type="text" name="firstName" placeholder="First Name">
                                <div id="firstname-error" class="message-error"></div>
                            </div>
                            <div class="input-wrapper">
                                <input type="text" name="lastName" placeholder="Last Name">
                                <div id="lastname-error" class="message-error"></div>
                            </div>
                        </div>
                
                        <div class="input-wrapper">
                            <input type="email" name="email" placeholder="Email">
                            <div id="email-error" class="message-error"></div>
                        </div>
                
                        <div class="input-wrapper">
                            <input type="password" name="password" placeholder="Password">
                            <div id="password-error" class="message-error"></div>
                        </div>
                
                        <div class="input-wrapper">
                            <input type="password" name="confirmPassword" placeholder="Confirm Password">
                            <div id="confirm-password-error" class="message-error"></div>
                        </div>
                        <div id="register-error" class="message-error"></div>
                        <div id="register-success" class="message-success" style="color: #00ff00"></div>

                        <div class="input-wrapper">
                            <input type="tel" name="mobileNumber" id="mobile-number" placeholder="Mobile Number">
                        </div>
    
                        <div class="city-district-wrapper">
                            <div class="input-wrapper">
                                <span>Thành phố</span>
                                <select name="city" id="city">
                                    <option value="haNoi">Hà Nội</option>
                                    <option value="tpHCM">TP Hồ Chí Minh</option>
                                </select>
                            </div>
                            <div class="input-wrapper">
                                <span>Quận/Huyện</span>
                                <select name="district" id="district">
                                    <option value="">abc</option>
                                </select>
                            </div>
                        </div>
                        
                    </div>
                    <div class="form-footer">
                        <a id="register-link" href="#">Already have an account? Login</a>
                        <button id="register-submit-btn" type="submit">Register</button>
                    </div>
                </form>
                </section>
`
components.jobSeekerRegister = `
<section class="register-container">
            <form id="form-register" class="form-register">
                <div class="form-header">
                    <h3>Sign up</h3>
                </div>
                <div class="form-content">
                    <div class="name-wrapper">
                        <div class="input-wrapper">
                            <input type="text" name="firstName" placeholder="First Name">
                            <div id="firstname-error" class="message-error"></div>
                        </div>
                        <div class="input-wrapper">
                            <input type="text" name="lastName" placeholder="Last Name">
                            <div id="lastname-error" class="message-error"></div>
                        </div>
                    </div>
            
                    <div class="input-wrapper">
                        <input type="email" name="email" placeholder="Email">
                        <div id="email-error" class="message-error"></div>
                    </div>
            
                    <div class="input-wrapper">
                        <input type="password" name="password" placeholder="Password">
                        <div id="password-error" class="message-error"></div>
                    </div>
            
                    <div class="input-wrapper">
                        <input type="password" name="confirmPassword" placeholder="Confirm Password">
                        <div id="confirm-password-error" class="message-error"></div>
                    </div>
                    <div id="register-error" class="message-error"></div>

                    <div class="dob-gender-wrapper">
                        <div class="input-wrapper" id="dob-wrapper">
                            <span>Ngày sinh</span>
                            <input type="date" name="dateOfBirth" placeholder="Date of birth" class="dob-input">
                        </div>
                        <div class="input-wrapper">
                            <span>Giới tính</span>
                            <select name="gender" id="gender">
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="input-wrapper">
                        <input type="tel" name="mobileNumber" id="mobile-number" placeholder="Mobile Number">
                    </div>

                    <div class="city-district-wrapper">
                        <div class="input-wrapper">
                            <span>Thành phố</span>
                            <select name="city" id="city">
                                <option value="ha-noi">Hà Nội</option>
                                <option value="tphcm">TP Hồ Chí Minh</option>
                            </select>
                        </div>
                        <div class="input-wrapper">
                            <span>Quận/Huyện</span>
                            <select name="district" id="district">
                                <option value="">abc</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-wrapper">
                        <span>Ngành nghề chính</span>
                        <div class="job-wrapper">
                            <select name="job1" id="job-1">
                                <option value="Lao công">Lao công</option>
                                <option value="Phụ hồ">Phụ hồ</option>
                                <option value="Tiếp thị">Tiếp thị</option>
                            </select>
                        </div>                        
                    </div>
                    
                </div>
                <div id="register-success" class="message-success" style="color: #00ff00"></div>

                <div class="form-footer">
                    <a id="register-link" href="#">Already have an account? Login</a>
                    <button id="register-submit-btn" type="submit">Register</button>
                </div>
            </form>
            </section>
            `

components.logIn = `

          <div class="card-signin">
            <h5 class="card-title text-center">Sign In</h5>
            <form id="log-in-form" class="form-signin">
              <div class="form-label-group">
                <input type="email" id="email" class="form-control" placeholder="Email address" required autofocus>
                
              </div>

              <div class="form-label-group">
                <input type="password" id="password" class="form-control" placeholder="Password" required>
                
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              
            </form>
          </div>
        
`

components.asideLeft = `<div  id="aside-left">
                <div id="avatar-container">
                    <img src="../ViecNhanh/DesManHinh/ava.png" alt="" id="avatar">
                </div>
                <div id="infor-user-basic">
                    <div class="infor-inline-wrapper">
                        <span>Họ và tên: </span>
                        <span id="fullName"></span>
                    </div>
                    <div class="infor-inline-wrapper">
                        <span>Giới tính: </span>
                        <span id="gender"></span>
                    </div>
                    <div class="infor-inline-wrapper">
                        <span>Ngày sinh: </span>
                        <span id="dateOfBirth"></span>
                    </div>
                    <div class="infor-inline-wrapper">
                        <span>Số điện thoại: </span>
                        <span id="mobileNumber"></span>
                    </div>
                    <div class="infor-inline-wrapper">
                        <span>email: </span>
                        <span id="email"></span>
                    </div>
                    <div class="infor-inline-wrapper">
                        <span>Thành Phố: </span>
                        <span id="city"></span>
                    </div>
                </div>

                <button class="btn btn-danger" onclick="controller.logOut()">Log Out</button>
                <div id="control-container">
                    
                </div>
            </div>`
components.chooseJobForEmployee = `
    <div class="modal fade" id="choose-job-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content" id="modal-choose-job">
                <div id="choose-job-list-container">
                    
                    
                </div>    
            </div>
        </div>
    </div>
`
components.postJob = `
<div class="modal fade" id="add-job-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form id="form-post-job">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Đăng bài</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <div class="input-wrapper">
                        <span>Tên công việc:</span>
                        <input name="jobTitle" placeholder="Tên công việc">
                    </div>
                    <div class="input-wrapper">
                        <span>Địa chỉ:</span>
                        <input name="address" placeholder="Địa chỉ">
                    </div>
                    <div class="input-wrapper">
                        <span>Thời gian:</span>
                        <input name="time" placeholder="Thời gian">
                    </div>
                    <div class="input-wrapper">
                        <span>Mô tả công việc:</span>
                        <input name="description" placeholder="Mô tả công việc">
                    </div>
                    <div class="input-wrapper">
                        <span>Lương:</span>
                        <input name="salary" placeholder="">
                    </div>

                        
                    </div>
                    <div class="message" id="post-noti"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Submit</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
    
`

components.listEmployee = `
    <div id="search-bar-filter-container">
                    <input type="text" name="search-bar" id="search-bar" placeholder="Search">
                    <div id="filter-container">
                        <span>Lọc</span>
                        <select name="filter" id="filter">
                            <option value="distance">Khoảng cách</option>
                            <option value="salary">Mức lương</option>
                        </select>
                    </div>
                    
                    <div id="tags-container">
                        <span>Tags</span>
                        <select name="jobs-tags" id="jobs-tags">
                            <option value="1">Bốc vác</option>
                            <option value="2">Dọn nhà</option>
                        </select>
                    </div>
                    <button class="btn btn-success btn-lg" id="post-job">Post</button>
                </div>
                <div id="employees-list-container" class="list-container">
                    
                </div>
                </div>
`

components.postedJob = `
                <div id="posted-jobs-header">
                    Posted Jobs:
                </div>
                <div id="posted-jobs-list-container" class="list-container">
                    
                </div>
            </div>
`
components.employer = `
    
    

            <div id="menu-btn"></div>
            ${components.asideLeft}
            <div  id="aside-right">
                <div id="main-content">
                ${components.listEmployee}
                ${components.postJob}
                ${components.chooseJobForEmployee}
                </div>
            </div>

    
`



components.listJobs = `
                    <div id="search-bar-filter-container">
                        <input type="text" name="search-bar" id="search-bar" placeholder="Search">
                        <div id="filter-container">
                            <span>Lọc</span>
                            <select name="filter" id="filter">
                                <option value="distance">Khoảng cách</option>
                                <option value="salary">Mức lương</option>
                            </select>
                        </div>

                        <div id="tags-container">
                            <span>Tags</span>
                            <select name="jobs-tags" id="jobs-tags">
                                <option value="1">Bốc vác</option>
                                <option value="2">Dọn nhà</option>
                            </select>
                        </div>
                    </div>
                <div id="jobs-list-container" class="list-container">
                    
                </div>

`
components.employeeProfile = `
<div id="profile-container">
                    <div id="personal-info">
                        <div id="personal-left">
                            <div class="profile-wrapper">
                                <span>Họ và tên :</span>
                                <div class="profile-line" id="fullName">Nguyễn Văn A</div>
                            </div>
                            <div class="profile-wrapper">
                                <span>Ngày sinh :</span>
                                <div class="profile-line" id="dateOfBirth">01/01/1999</div>
                            </div>
                            <div class="profile-wrapper">
                                <span>Số điện thoại :</span>
                                <div class="profile-line" id="mobileNumber">0336275142</div>
                            </div>
                            <div class="profile-wrapper">
                                <span>Tags công việc :</span>
                                <div class="profile-line" id="jobTags"></div>
                            </div>
                        </div>

                        <div id="personal-right">
                            <div class="profile-wrapper">
                                <span>Giới tính :</span>
                                <div class="profile-line" id="gender">Nam</div>
                            </div>
                            <div class="profile-wrapper">
                                <span>Email :</span>
                                <div class="profile-line" id="email">nguyenvana@gmail.com</div>
                            </div>
                            <div class="profile-wrapper">
                                <span>Thành phố :</span>
                                <div class="profile-line" id="city">Hà Nội</div>
                            </div>
                            <div class="profile-wrapper">
                                <span>Quận/Huyện :</span>
                                <div class="profile-line" id="district">Thanh Xuân</div>
                            </div>
                        </div>
                    </div>

                    <div id="description">
                        <span>Mô tả bản thân</span>
                        <div id="self-description">
                            Đẹp trai giống bố
                        </div>
                    </div>
                    <button>Edit</button>
                </div>
`
components.application = `
<div id="applied-jobs-header">
                    Applied Jobs:
                </div>
                <div id="applied-jobs-list-container" class="list-container">
                    
                    
                </div>
            
`
components.jobOffers=`
<div id="job-offers-header">
                    Job offers: 
                </div>
                
                <div id="job-offers-container" class="list-container">
                    
               </div>
            
        </div>  
`
components.jobSeeker = `
    

            <div id="menu-btn"></div>
            ${components.asideLeft}
            <div  id="aside-right">
                <div id="main-content">
                ${components.listJobs}

                </div>
            </div>
        
          `


