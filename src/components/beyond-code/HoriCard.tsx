import HeadingText from '../HeadingText';
import DescriptionText from '../DescriptionText';
import WhiteText from '../WhiteText';


interface HorizontalCardProps {
    LR: string,
    screenshotPath: string;
    title: string;
    description: string;
    tags: string[];
    demoLink?: string | undefined;
    linkText?:string | undefined;
}

const HoriCard = ({ LR, screenshotPath,
    title,
    description,
    tags,
    demoLink = undefined,
    linkText }: HorizontalCardProps) => {
    return (
    <div className={`w-full mb-[30px] flex flex-col items-center border-[2px] border-[#6763f0] p-[10px] m-[5px] rounded-[10px] bg-[#ffffff11] gap-4
        md:flex-row md:justify-evenly md:items-center md:h-[500px]
        ${LR === 'L' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className='w-full md:w-[50%] h-[200px] sm:h-[250px] md:h-[70%] overflow-hidden rounded-[8px] flex items-center justify-center'>
                <img
                    src={screenshotPath}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='w-full md:w-[45%] px-2'>
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

                <div className='flex flex-wrap gap-[20px] mt-[20px]'>
                    {demoLink !== undefined && linkText !== undefined && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer">
                            <WhiteText e={linkText} />
                        </a>
                    )}
                </div>

            </div>

        </div>
    )
}

export default HoriCard
