import { Button } from "./Button/Button";
import "./StoryBook.scss";

export default function StoryBook() {
  return (
    <div className="buttons">
      <Button className="btn-small">Small Default</Button>
      <Button className="btn-small btn-accent">Small Accent</Button>
      <Button className="btn-small" outline>
        Small Outline
      </Button>
      <Button>Default</Button>
      <Button className="btn-accent">Accent</Button>
      <Button outline>Outline</Button>
      <Button className="btn-small" disabled>
        Small Disabled Default
      </Button>
      <Button className="btn-small btn-accent" disabled>
        Small Disabled Accent
      </Button>
      <Button className="btn-small" outline disabled>
        Small Disabled Outline
      </Button>
      <Button disabled>Disabled Default</Button>
      <Button className="btn-accent" disabled>
        Disabled Accent
      </Button>
      <Button outline disabled>
        Disabled Outline
      </Button>
    </div>
  );
}
