import { useInViewport } from 'react-in-viewport';
import { useRef } from 'react';

const StatsCard: React.FC = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(ref);

  // TODO: make the animation only run one time

  return (
    <div className='h-[80vh] bg-zinc-900 px-32'>
      <div
        ref={ref}
        className={`flex h-full flex-col items-center justify-evenly ${inViewport ? 'fade-in-up' : ''}`}
      >
        <h3 className='text-xl'>Hello look at my stats</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut cumque
          tempora minus voluptatum officia nostrum, porro repudiandae, nesciunt
          non obcaecati eum nobis velit! Molestiae dicta ipsa enim facilis
          mollitia quos neque nisi quia! Mollitia labore aut, nostrum provident
          velit sequi temporibus. Expedita corporis harum sint assumenda at
          blanditiis aperiam consequuntur amet recusandae ratione, maiores iusto
          officia et repellendus quasi natus earum omnis optio totam
          perferendis, iure incidunt, quibusdam ab! Ad maxime pariatur quos non
          molestias, minima quas placeat repellat quibusdam, accusantium nulla
          dolorem aliquid labore saepe unde praesentium tempora dignissimos?
          Aperiam libero culpa tempore architecto adipisci similique sint
          quisquam in.
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
