import "./style.css";

const Section = ({ title, extraHeaderContent, body }) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__header--title">{title}</h2>
            {extraHeaderContent}
        </header>
        <div className="section__body">
            {body}
        </div>
    </section>
);

export default Section;