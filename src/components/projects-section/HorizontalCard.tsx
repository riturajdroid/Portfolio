import HeadingText from '../HeadingText';
import DescriptionText from '../DescriptionText';
import WhiteText from '../WhiteText';


interface HorizontalCardProps {
    LR: string,
    screenshotPath: string;
    title: string;
    description: string;
    tags: string[];
    githubLink: string;
    demoLink?: string | undefined;
}

const HorizontalCard = ({ LR, screenshotPath,
    title,
    description,
    tags,
    githubLink,
    demoLink = undefined, }: HorizontalCardProps) => {
    return (
    <div className={`w-full mb-[30px] flex flex-col items-center border-[2px] border-[#6763f0] p-[10px] m-[5px] rounded-[10px] bg-[#ffffff11] gap-4
        lg:flex-row lg:justify-evenly lg:items-center lg:h-[500px]
        ${LR === 'L' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            <div className='w-full lg:w-[50%] h-[200px] sm:h-[250px] lg:h-[70%] overflow-hidden rounded-[8px] flex items-center justify-center'>
                <img
                    src={screenshotPath}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='w-full lg:w-[45%] px-2'>
                <div>
                    <HeadingText e={title} />
                </div>
                <div>
                    <DescriptionText e={description} />
                </div>
                <div>
                    <ul className="mt-2 list-disc list-inside flex flex-wrap gap-[10px]">
                        {tags.map((item, index) => (
                            <li key={index} className='list-none'>
                                <div className='bg-[#00000071] rounded-[10px] border-[2px] border-[#1259ff]'>
                                    <DescriptionText e={item} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-wrap gap-[20px] lg:gap-[40px] mt-[20px]'>
                    <a href={githubLink}>
                        <WhiteText e="Github Repository Link" />
                    </a>
                    {demoLink !== undefined && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer">
                            <WhiteText e="Live Demo Link" />
                        </a>
                    )}
                </div>

            </div>

        </div>
    )
}

export default HorizontalCard
