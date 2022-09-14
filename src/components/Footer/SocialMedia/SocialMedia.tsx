import clsx from "clsx";
import { ReactComponent as FacebookLogo } from "./logo.svg";
import { ReactComponent as GithubLogo } from "./github-logo.svg";
export interface Props {
  className?: string;
}

const SocialMedia = ({ className }: Props) => {
  return (
    <ul className={clsx(className, "mr-8 my-8 flex gap-2 fill-current")}>
      <li>
        <a href="https://www.github.com/soosap">
          <FacebookLogo />
        </a>
      </li>
      
    
      <li>
        <a href="https://www.facebook.com/soosap">
          <GithubLogo />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
