import loginImage from "../../assets/IMG_7675.jpg";
import styles from "./Login.module.css";

function Login() {
  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-7 col-lg-5 col-xl-5  mt-5 pt-lg-5">
            <form
              action="{% url 'register' %}"
              method="post"
              className="text-right"
            >
              {/* Email input */}
              <div className="form-outline mb-4">
                <label className="form-label" for="email">
                  آدرس ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control form-control-lg"
                />
              </div>

              {/* Password input  */}
              <div className="form-outline mb-4">
                <label className="form-label" for="password">
                  رمز عبور
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" for="confirmation">
                  تکرار رمز عبور
                </label>
                <input
                  type="password"
                  id="confirmation"
                  name="confirmation"
                  className="form-control form-control-lg"
                />
              </div>

              {/* Submit button  */}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                ثبت نام
              </button>

              <div className="d-flex align-items-center justify-content-center my-5 pb-4">
                <a
                  href="{% url 'login' %}"
                  className="btn btn-outline-primary mx-3"
                >
                  وارد شوید
                </a>
                <p className="mb-0 mr-3">حساب کاربر دارید؟</p>
              </div>
            </form>
          </div>
          <div
            className={`col-md-8 col-lg-7 col-xl-6 offset-xl-1 ${styles.imgBox}`}
          >
            <img
              src={loginImage}
              className={`img-fluid ${styles.charityImage}`}
              alt="charity image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
