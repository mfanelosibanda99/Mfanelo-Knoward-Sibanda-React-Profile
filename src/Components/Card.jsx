
function ProfileCard() {
  return (
    <div className="mx-auto my-12 w-[90%] max-w-xl rounded-2xl border-t-4 border-teal-500 bg-white p-8 text-center shadow-xl sm:p-10">
      <h2 className="mb-5 text-2xl font-bold text-slate-800 sm:text-3xl">
        Mfanelo Knoward Sibanda
      </h2>

      <p className="mb-6 text-base leading-8 text-slate-600">
        I am a Software Engineer student at Uncommon.org passionate about building useful
        applications and learning new technologies.
      </p>

      <h3 className="mb-3 text-xl font-semibold text-teal-600">
        Course & Skills
      </h3>

      <p className="text-base leading-7 text-slate-600">
        Software Development, HTML, CSS, JavaScript, Typescript, React, and Python
      </p>
    </div>
  );
}

export default ProfileCard;
