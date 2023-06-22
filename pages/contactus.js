export default function About() {
  return (
    <div>
      <section className="black">
        <div>
          <h1>Contact Us</h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <p>
              To help us best serve your inquiry, we recommend that you first
              describe the issue you’re having before telling us what you want
              to achieve. You may also email or call us to make an appointment.
            </p>
            <p>
              Our general response time is one business day. contact@canterr.com
            </p>
            <p>
              +1 (312) 730-8654 5908 Timber Trails Blvd, Western Springs,
              IL-60558
            </p>
          </div>
          <div>
            <form>
              <div>
                <div>First Name</div>
                <div>
                  <input type="text" name="firstname" required />
                </div>
              </div>
              <div>
                <div>Last Name</div>
                <div>
                  <input type="text" name="lastname" required />
                </div>
              </div>
              <div>
                <div>Email</div>
                <div>
                  <input type="text" name="email" required />
                </div>
              </div>
              <div>
                <div>Message</div>
                <div>
                  <textarea rows="6" cols="30" name="message" required />
                </div>
              </div>
              <button type="submit" name="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
